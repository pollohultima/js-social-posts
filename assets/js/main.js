/* Creare una pagina che elenchi una lists di post socials a partire da un array di oggetti.
Gli attributi minimi del modello di un post: id, contenuto, immagine,
autore (nome, avatar), numero di likes, data creazione.
Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like.
 */

const posts = [
    {
        id: 1,
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas perferendis libero magni fugiat quasi, neque animi dolorem maiores ratione, officia pariatur enim similique commodi eaque dolore rem quibusdam voluptas? Dolor, ipsa voluptate. Voluptas ducimus blanditiis quisquam voluptates asperiores, tenetur commodi, eveniet magnam consequuntur aspernatur quas doloremque ex odio. Libero, ut.',
        image: 'https://unsplash.it/300/300?image=',
        user: 'Gigi Caglio',
        likes: 0,
        date: 0
    },

    {
        id: 2,
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas perferendis libero magni fugiat quasi, neque animi dolorem maiores ratione, officia pariatur enim similique commodi eaque dolore rem quibusdam voluptas? Dolor, ipsa voluptate. Voluptas ducimus blanditiis quisquam voluptates asperiores, tenetur commodi, eveniet magnam consequuntur aspernatur quas doloremque ex odio. Libero, ut.',
        image: 'https://unsplash.it/300/300?image=',
        user: 'Mario Sucro',
        likes: 0,
        date: 0
    },

    {
        id: 3,
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas perferendis libero magni fugiat quasi, neque animi dolorem maiores ratione, officia pariatur enim similique commodi eaque dolore rem quibusdam voluptas? Dolor, ipsa voluptate. Voluptas ducimus blanditiis quisquam voluptates asperiores, tenetur commodi, eveniet magnam consequuntur aspernatur quas doloremque ex odio. Libero, ut.',
        image: 'https://unsplash.it/300/300?image=',
        user: 'Angelo Pappino',
        likes: 0,
        date: 0
    },
    {
        id: 4,
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas perferendis libero magni fugiat quasi, neque animi dolorem maiores ratione, officia pariatur enim similique commodi eaque dolore rem quibusdam voluptas? Dolor, ipsa voluptate. Voluptas ducimus blanditiis quisquam voluptates asperiores, tenetur commodi, eveniet magnam consequuntur aspernatur quas doloremque ex odio. Libero, ut.',
        image: 'https://unsplash.it/300/300?image=',
        user: 'Diego Culino',
        likes: 0,
        date: 0
    },
]