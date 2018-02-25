# Deployment for rutas.mapanica.net

The web app consists in several elements working together:

* [OpenTripPlanner](http://www.opentripplanner.org/) for public transport routing.
* [Digitransit-UI](https://digitransit.fi/) as the better web user interface.
* [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) to hold explicitly all server configuration.
* [Traefik](https://traefik.io/) as a reverse proxy.
* [Let's Encrypt](https://letsencrypt.org/) for certificate generation and standard setup using TLS (https)
