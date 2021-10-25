/* Creare una pagina che elenchi una lists di post socials a partire da un array di oggetti.
Gli attributi minimi del modello di un post: id, contenuto, immagine,
autore (nome, avatar), numero di likes, data creazione.
Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like.
 */

const posts = [
    {
        id: 1,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem asperiores voluptate dicta itaque sed recusandae eos culpa. Quas aperiam sunt perspiciatis, provident possimus iure deleniti voluptas ab aliquam neque officia?',
        image: 'https://unsplash.it/1200/800?image=',
        avatar: 'https://unsplash.it/300/300?image=',
        user: 'Gigi Caglio',
        likes: 80,
        date: 2
    },

    {
        id: 2,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem asperiores voluptate dicta itaque sed recusandae eos culpa. Quas aperiam sunt perspiciatis, provident possimus iure deleniti voluptas ab aliquam neque officia?',
        image: 'https://unsplash.it/1200/700?image=',
        avatar: 'https://unsplash.it/400/400?image=',
        user: 'Mario Sucro',
        likes: 120,
        date: 4
    },

    {
        id: 3,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem asperiores voluptate dicta itaque sed recusandae eos culpa. Quas aperiam sunt perspiciatis, provident possimus iure deleniti voluptas ab aliquam neque officia?',
        image: 'https://unsplash.it/1400/960?image=',
        avatar: 'https://unsplash.it/350/350?image=',
        user: 'Angelo Pappino',
        likes: 40,
        date: 6
    },
    {
        id: 4,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem asperiores voluptate dicta itaque sed recusandae eos culpa. Quas aperiam sunt perspiciatis, provident possimus iure deleniti voluptas ab aliquam neque officia?',
        image: 'https://unsplash.it/1920/1080?image=',
        avatar: 'https://unsplash.it/320/320?image=',
        user: 'Diego Culino',
        likes: 35,
        date: 9
    },
]

const liked = []

for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    const element = `
    <div class="col-7">
                        <div class="card m-4">
                            <div class="heading d-flex m-4 align-items-center">
                                <img class="avatar rounded-circle" src=${post.avatar} alt="">
                                <div class = "tags mx-4">
                                    <h5 class="user m-0">${post.user}</h5>
                                    <p class="date m-0">${post.date} mesi fa</p>
                                </div>
                            </div>
                            <div class="hero_image mx-4">
                            <p class="caption fs-5 mb-4">${post.content}</p>
                                <img class="post_image" src=${post.image} alt="">
                            </div>
                            <div class="buttons m-4 d-flex justify-content-around align-items-center fs-4">
                                <button type="button" class="btn like fs-4"><i class="fas fa-thumbs-up"></i> Mi piace</button>
                                <div class="like_counter">Piace a ${post.likes} persone</div>
                            </div>
                        </div>
                    </div>
    
    `
    document.querySelector('.row').insertAdjacentHTML('beforeend', element)
}



