class PGMod {
  constructor() {
    this._modules = {}
    console.log('DEBUG: PGMod initialized')
  }

  test () {
    console.log('DEBUG: PGMod is registered')
  }

  get(name) {
    return this._modules[name]
  }
}

// export and auto register module
export default new PGMod()
