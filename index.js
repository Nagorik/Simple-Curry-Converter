
class CurryConvert {
    
    static me(func) {
        return function curried(...args) {
            if(args.length >= func.length) {
                return func.apply(this, args)
            } else {
                return function (...restArgs) {
                    return curried.apply(this, args.concat(restArgs))
                }
            }
        }
    }
} 

module.exports = CurryConvert;