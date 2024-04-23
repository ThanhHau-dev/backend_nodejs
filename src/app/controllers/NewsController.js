class NewsController{

    // Phương thức GET, đang chọc vào news
    index(req, res){
        res.render('news');
    }
    // Phương thức GET của news slug
    show(req, res) {
        res.send('New detall');
    }
}

module.exports = new NewsController;
