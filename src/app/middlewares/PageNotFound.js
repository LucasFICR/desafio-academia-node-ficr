const PageNotFound = (req, res, next) => {
  res.status(404).send("Error_404 - Nada Aqui meu patrão :(");
}

module.exports = PageNotFound;