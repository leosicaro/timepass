const validarhora = (req,res,next) => {
    if(req.hour < 8) {
        res.locals.mensaje = `ya va quedando poco para las 8...`;
        return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
    next();
}
module.exports = validarhora;