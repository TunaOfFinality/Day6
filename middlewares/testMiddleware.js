const testMiddleware = (rr = undefined) => {
    return (req, res, next) => {
      console.log("Authen")
      console.log(rr)
      next()
    }
}

export default testMiddleware