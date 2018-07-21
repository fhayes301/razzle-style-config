
module.exports = {

  modify: config => {

    config.node = {
      fs: "empty",
      net: "empty"
    };
    return config;
  }

};
