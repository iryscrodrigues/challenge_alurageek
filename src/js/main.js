window.onload = function() {
    var overlay = document.getElementById('overlay');
    var closeBtn = document.getElementById('closeBtn');

    // Exibe o overlay ao carregar a página
    overlay.style.display = 'flex';

    // Adiciona um evento de clique no botão de fechar
    closeBtn.onclick = function() {
        overlay.style.display = 'none';
    };
};


let products = [
    {
        id: 0,
        image: "https://a-static.mlcdn.com.br/800x560/pelucia-hello-kitty-18-cm-jazwares/midgardtoys/14869-8659/61e2c5ab3abbe6ea3d2cf7d43fa14452.jpeg",
        product: "Hello Kitty cupid",
        price: 100.0,
    },
    {
        id: 1,
        image: "https://a-static.mlcdn.com.br/800x560/pelucia-hello-kitty-18-cm-jazwares/midgardtoys/14869-8653/ef0dfcd6028a975f58c1c0f4e729bdeb.jpeg",
        product: "Hello Kitty butterfly",
        price: 100.0,
    },
    {
        id: 2,
        image: "https://a-static.mlcdn.com.br/800x560/pelucia-hello-kitty-18-cm-jazwares/midgardtoys/14869-8667/facb9fe649c16717fe6f49d7bea8af59.jpeg",
        product: "Hello Kitty flower dress",
        price: 100.0,
    },
    {
        id: 3,
        image: "https://a-static.mlcdn.com.br/800x560/pelucia-hello-kitty-18-cm-jazwares/midgardtoys/14869-8665/f7a8dd83e5148d4bd3a2a82b910447bc.jpeg",
        product: "Hello Kitty sunglasses",
        price: 100.0,
    },
    {
        id: 4,
        image: "https://a-static.mlcdn.com.br/800x560/pelucia-hello-kitty-18-cm-jazwares/midgardtoys/14869-8663/e33c4dff4d0f70a7fafef5d380619d7a.jpeg",
        product: "Hello Kitty strawberry",
        price: 100.0,
    },
    {
        id: 5,
        image: "https://a-static.mlcdn.com.br/800x560/pelucia-hello-kitty-18-cm-jazwares/midgardtoys/14869-8657/d14d2a104d61c300c324a75291ab55d5.jpeg",
        product: "Hello Kitty cupcake",
        price: 100.0,
    },
];

// Função para mostrar um novo produto

function readProducts() {
    const cards = document.getElementById("cards");
    cards.innerHTML = "";
    products.forEach((product) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${product.image}" alt="Imagem do produto">
            <div class="card-container--info">
                <p>${product.product}</p>
                <div class="card-container--price">
                    <p>R$ ${product.price.toFixed(2)}</p>
                    <img class="trash" src="./src/images/trash.png" alt="Ícone do Lixo" onclick="deleteProduct(${product.id})">
                    <img class="edit" src="./src/images/pen.png" alt="Ícone de Edição" onclick="updateProduct(${product.id})">
                </div>
            </div>
        `;
        cards.appendChild(card);
    });
}

// Função para criar um novo produto
function createProduct() {
    const form = document.getElementById("form-product");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const price = parseFloat(document.getElementById("price").value);
        const image = document.getElementById("image").value;
        if (name && price && image) {
            const newProduct = {
                id: products.length,
                image,
                product: name,
                price,
            };
            products.push(newProduct);
            readProducts();
            form.reset();
        } else {
            alert("Preencha todos os campos!");
        }
    });
}

// Função para deletar um produto
function deleteProduct(id) {
    if (confirm("Tem certeza que deseja excluir o produto?")) {
        products = products.filter((product) => product.id !== id);
        readProducts();
        if (products.length === 0) {
            alert("Nenhum produto encontrado!");
        }
    }
}

// Função para atualizar um produto
function updateProduct(id) {
    const product = products.find((product) => product.id === id);
    if (product) {
        const name = prompt("Novo nome do produto:", product.product);
        const price = parseFloat(prompt("Novo valor do produto:", product.price));
        const image = prompt("Nova imagem do produto:", product.image);
        if (name && price && image) {
            product.product = name;
            product.price = price;
            product.image = image;
            readProducts();
            alert("Produto atualizado com sucesso!");
        } else {
            alert("Preencha todos os campos!");
        }
    } else {
        alert("Produto não encontrado!");
    }
}

// Inicializar a leitura dos produtos
readProducts();

// Inicializar a criação de produtos
createProduct();
