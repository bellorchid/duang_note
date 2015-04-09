Router.route('/', function () {
    this.render('main');
});

Router.route('/items', function () {
    this.render('header');
});

/*Router.route('/items/:_id', function () {
    var item = Items.findOne({_id: this.params._id});
    this.render('ShowItem', {data: item});
});

Router.route('/files/:filename', function () {
    this.response.end('hi from the server\n');
}, {where: 'server'});

Router.route('/restful', {where: 'server'})
    .get(function () {
        this.response.end('get request\n');
    })
    .post(function () {
        this.response.end('post request\n');
    });*/