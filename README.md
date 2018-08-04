# Deployment for rutas.mapanica.net

The web app consists in several elements working together:

* [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) to hold explicitly all server configuration.
* [OpenTripPlanner](http://www.opentripplanner.org/) for public transport routing.
* [Pelias](https://pelias.io) for geocoding.
* [Digitransit-UI](https://digitransit.fi/) as the better web user interface.
* [Traefik](https://traefik.io/) as a reverse proxy.
* [Let's Encrypt](https://letsencrypt.org/) for certificate generation and standard setup using TLS (https)


## Setup

### Pelias

Run

```
pelias compose pull && pelias elastic start && pelias elastic wait && pelias elastic create && pelias download all && pelias prepare all && pelias import all && pelias compose up
```
