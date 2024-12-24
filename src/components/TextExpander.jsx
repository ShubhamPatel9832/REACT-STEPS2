import { useState } from "react";
const textStyle = {
    maxWidth: "40rem",
};

const rowText = ` Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Necessitatibus, veniam dolor non repellendus fugit aspernatur
                officiis sed esse iure placeat quod eos numquam repudiandae
                dicta odit animi dolorem accusantium modi consectetur!
                Aspernatur excepturi, ad necessitatibus veritatis animi ut quae
                nesciunt ex recusandae, quisquam quod! Blanditiis culpa neque
                numquam debitis doloribus. Nam iste modi laborum amet
                perspiciatis, facere dicta velit repellat eos ducimus nulla
                sequi officiis. At vel consectetur eaque maiores fuga!
                Asperiores voluptatum impedit molestias nostrum accusamus
                doloribus doloremque quibusdam in necessitatibus. Natus tenetur
                aspernatur, nam vel impedit corporis mollitia temporibus
                incidunt voluptatum recusandae aliquam quas ut exercitationem
                sint repudiandae dolorum odio ad esse? Odio id, suscipit
                cupiditate repellat et non maxime omnis deserunt dolorem animi
                quisquam, vero repudiandae nostrum eligendi atque iusto tenetur
                delectus? Repellat expedita consequuntur quibusdam, veniam
                eveniet omnis accusamus repellendus tempore ab. Id, cum. Dolorum
                molestias animi illo, quidem, nostrum quam nesciunt obcaecati
                quas ipsam odit nisi asperiores eos velit fugit provident, sequi
                id ratione! Vero quis distinctio impedit voluptates laudantium
                ipsum expedita voluptatibus quasi ipsam possimus corporis
                asperiores at quo nesciunt natus iste inventore autem, atque
                error tempore quaerat temporibus magni! Qui iste corporis nihil
                molestias! Asperiores perferendis aspernatur laborum minima quod
                minus placeat neque? id ratione! Vero quis distinctio impedit
                voluptates laudantium ipsum expedita voluptatibus quasi ipsam
                possimus corporis asperiores at quo nesciunt natus iste
                inventore autem, atque error tempore quaerat temporibus magni!
                Qui iste corporis nihil molestias! Asperiores perferendis
                aspernatur laborum minima quod minus placeat neque? id ratione!
                Vero quis distinctio impedit voluptates laudantium ipsum
                expedita voluptatibus quasi ipsam possimus corporis asperiores
                quaerat temporibus magni! Qui iste corporis nihil molestias!
                Asperiores perferendis aspernatur laborum minima quod minus
                placeat neque?`;

const btn = {
    padding: "0.5rem",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "#da77f2",
    fontSize: "1rem",
    color: "white",
    cursor: "pointer",
    marginTop: "5px",
};

function TextExpander() {
    const [show, setShow] = useState(false);

    // Dreived State
    const text = show ? rowText : rowText.slice(0, 100);

    function handleClick() {
        setShow((show) => !show);
    }

    return (
        <div style={textStyle}>
            <p>{text}</p>
            <button onClick={handleClick} style={btn}>
                {show ? "show less" : "show more  "}
            </button>
        </div>
    );
}

export default TextExpander;
