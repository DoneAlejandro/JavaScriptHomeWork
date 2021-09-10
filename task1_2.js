'use strict';



function Post (author, text, date) {
	this.author = author;
	this.text = text;
	this.date = date;
}

Post.prototype.edit = function () {
	alert(this.author, this.text, this.date);
};


function AttachedPost (author, text, date, highlighted) {
	Post.call(this.author, this.text, this.date);
	this.highlighted = 'false';
}


AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.constructor = AttachedPost;


AttachedPost.prototype.edit2 = function() {
	console.log(this.highlighted = 'true');
};


let AttachObject = new AttachedPost('author', 'text', 'date', 'highlighted');
AttachObject.edit();
AttachObject.edit2();


class Post {
	constructor(author, text, date) {
		this.author = author;
		this.text = text;
		this.date = date;
	}
	edit() {
		alert(this.author, this.text, this.date);
	}
}


class AttachedPost extends Post {
	constructor(author, text, date, highlighted) {
		super(author, text, date, highlighted);
		console.log(this.highlighted = 'false');
	}
	edit2() {
		console.log(this.highlighted = 'true')
	}
}


let AttachObject = new AttachedPost('author', 'text', 'date', 'highlighted');
AttachObject.edit();
AttachObject.edit2();



