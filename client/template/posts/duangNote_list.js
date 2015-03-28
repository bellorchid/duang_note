/*var noteData = [
    {
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/'
    },
    {
        title: 'Meteor',
        url: 'http://meteor.com'
    },
    {
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com'
    }
];
Template.noteList.helpers({
    posts: noteData
});*/非Collection存储
Template.noteList.helpers({
    posts : function() {
        return Posts.find();
    }
});