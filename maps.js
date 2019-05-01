module.exports = [
   {
    name: "OpenStreetMap",
    category: "Changeset Analizers",
    domain: "www.openstreetmap.org",
    urlPattern: /www\.openstreetmap\.org\/changeset/,
    getUrl(changeset) {
      return 'https://www.openstreetmap.org/changeset/' + changeset;
    },
    getLatLonZoom(url) {
      const [, changeset] = url.match(/changeset\/(\d[0-9]*)/);
      return [changeset];
    },
  },
   {
    name: "OSMCha",
    category: "Changeset Analizers",
    domain: "osmcha.mapbox.com",
    urlPattern: /osmcha\.mapbox\.com\/changesets/,
    getUrl(changeset) {
      return 'https://osmcha.mapbox.com/changesets/' + changeset;
    },
    getLatLonZoom(url) {
      const [, changeset] = url.match(/changesets\/(\d[0-9]*)/);
      return [changeset];
    },
  },
  {
    name: "achavi",
    category: "Changeset Analizers",
    domain: "overpass-api.de",
    urlPattern: /overpass-api\.de\/achavi/,
    getUrl(changeset) {
      return 'https://overpass-api.de/achavi/?changeset=' + changeset;
    },
    getLatLonZoom(url) {
      const [, changeset] = url.match(/changeset=(\d[0-9]*)/);
      return [changeset];
    },
  },

];
