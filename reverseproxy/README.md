## Reverseproxy
The reverse proxy connects the containerized services to the internet, and
provides TLS termination so the service does not have to deal with
certificates.

### Running the reverse proxy
edit the configuration file `config/traefik.toml` and deploy the proxy
by running

```bash
docker-compose up -d
```

### Utilizing the reverse proxy
All containers that need to utilize the reverse proxy need to have access
to a network called `reverseproxy_web`.

Additionally, some labels have to be added so the reverse-proxy will start
noticing the container.

This is achieved by adding a reference inside the `docker-compose.yml`:

```yaml
version: '2'

networks:
  web:
    external: reverseproxy_web

services:
  webcontainer:
    # container attributes here ...
    labels:
      - "traefik.enable=true" # "false" to stop exporting the container
      - "traefik.backend=backend" # arbitrary name, must be unique
      - "traefik.frontend.rule=Host: backend.mapanica.net" # designated domain
      - "traefik.port=80" # port inside the container, that will be exported
    networks:
      - web
```

#### Multi-container services
If your service has multiple containers that need to communicate with each
other, you should add an additional network for this.

```diff
  networks:
    web:
      external: reverseproxy_web
+   internal:

  services:
    webcontainer:
      # container attributes here ...
      depends_on:
        - database
      networks:
        - web
+       - internal

    database:
      # container attributes here ...
+     networks:
+       - internal
```
