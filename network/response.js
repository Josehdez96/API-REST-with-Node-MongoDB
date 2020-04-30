const statusMessages = {
  "200": "Done",
  "201": "Created",
  "400": "Invalid format",
  "500": "Internal error"
}

exports.success = function (req, res, message, status) { //5)Function success
  let statusCode = status;
  let statusMessage = message
  if (!status) { //Creamos status por defecto
    status = 200;
  }

  if (!message) {
    statusMessage = statusMessages[status]
  }

  res.status(statusCode).send({
    error: "",
    body: statusMessage
  });
};

exports.error = function (req, res, message, status, details) { //5) Function error
  console.error(`[response error] ${details}`);

  res.status(status || 500).send({
    error: message,
    body: ""
  });
};