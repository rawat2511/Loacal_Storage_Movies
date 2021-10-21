var movies = [

    { 
        Title : "House of Cards", "Year": "2013–2018", 
        Released : "01 Feb 2013", 
        Poster : "https://m.media-amazon.com/images/M/MV5BODM1MDU2NjY5NF5BMl5BanBnXkFtZTgwMDkxNTcwNjM@._V1_SX300.jpg", 
        Ratings : [{ "Source": "Internet Movie Database", "Value": "8.7/10" }], 
    },

    {
        Title:"Blade Runner",
        Released:"25 Jun 1982",
        Poster:"https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        Ratings:[{"Source":"Internet Movie Database","Value":"8.1/10"}]
    },

    {
        Title:"Harry Potter and the Deathly Hallows: Part 2",
        Released:"15 Jul 2011",
        Poster:"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        Ratings:[{"Source":"Internet Movie Database","Value":"8.1/10"}]
    },

    {
        Title:"Matrix",
        Released:"01 Mar 1993","Runtime":"60 min",
        Poster:"https://m.media-amazon.com/images/M/MV5BYzUzOTA5ZTMtMTdlZS00MmQ5LWFmNjEtMjE5MTczN2RjNjE3XkEyXkFqcGdeQXVyNTc2ODIyMzY@._V1_SX300.jpg",
        Ratings:[{"Source":"Internet Movie Database","Value":"8.0/10"}]
    },

    {
        Title:"Venom",
        Released:"05 Oct 2018",
        Poster:"https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_SX300.jpg",
        Ratings:[{"Source":"Internet Movie Database","Value":"6.7/10"}]
    },

    {
        Title:"Outside the Wire",
        Released:"15 Jan 2021","Runtime":"114 min",
        Poster:"https://m.media-amazon.com/images/M/MV5BNmM2MWQ0NzktNzU0OS00MjYzLTkxNDYtMzliNTA5ZmNkMmZlXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
        Ratings:[{"Source":"Internet Movie Database","Value":"5.4/10"}]
    },

    {
        Title:"Black Widow",
        Released:"09 Jul 2021",
        Poster:"https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        Ratings:[{"Source":"Internet Movie Database","Value":"6.8/10"}]
    },

    {
        Title:"Kin",
        Released:"31 Aug 2018",
        Poster:"https://m.media-amazon.com/images/M/MV5BZDczYzNhMDMtNmQ2Ni00ZjcwLWI1MDQtMWI1YWVkNjkzN2NhXkEyXkFqcGdeQXVyNDMzMzI5MjM@._V1_SX300.jpg",
        Ratings:[{"Source":"Internet Movie Database","Value":"5.8/10"}]
    },

    {
        Title:"Arrival",
        Released:"11 Nov 2016",
        Poster:"https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg",
        Ratings:[{"Source":"Internet Movie Database","Value":"7.9/10"}]
    }

];

movies = JSON.stringify( movies );
localStorage.setItem( "movies", movies );