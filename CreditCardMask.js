function maskify(input) {
    return input.replace(/.(?=.{4})/g, "#");
  }