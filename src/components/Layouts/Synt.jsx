
import sky from '../../images/sky.jpeg'

function Synt() {

    const first_step = 8;

    let verticalLines = [];
    for (var i = -7; i <= (7); i++) {
        verticalLines.push(i);
    }

    let horizontalLines = [];
    for (var i = 4; i >= 0.5; (i = i - 0.5)) {
        horizontalLines.push(i);
    }

    function TranslateAmount(n) {
        let total = 0;
        for (let i = 1; i <= n; i++) {
            total = total + (first_step * (0.975 ** n))
        }
        return total * 8;
    }

    function TurnAmount(n) {
        return -(0.25 * (0.65 ** n) - 0.25);
    }

    return (
        <div className="synt">
            <div className="synt__container">
                <div className="synt__top">

                </div>

                <div className="synt__middle">
                </div>

                <div className="synt__bottom">

                    <div className="line__vertical" style={{ transform: `translate(-${TranslateAmount(7)}px,0) rotate(${TurnAmount(7)}turn)` }} />
                    <div className="line__vertical" style={{ transform: `translate(-${TranslateAmount(6)}px,0) rotate(${TurnAmount(6)}turn)` }} />
                    <div className="line__vertical" style={{ transform: `translate(-${TranslateAmount(5)}px,0) rotate(${TurnAmount(5)}turn)` }} />
                    <div className="line__vertical" style={{ transform: `translate(-${TranslateAmount(4)}px,0) rotate(${TurnAmount(4)}turn)` }} />
                    <div className="line__vertical" style={{ transform: `translate(-${TranslateAmount(3)}px,0) rotate(${TurnAmount(3)}turn)` }} />
                    <div className="line__vertical" style={{ transform: `translate(-${TranslateAmount(2)}px,0) rotate(${TurnAmount(2)}turn)` }} />
                    <div className="line__vertical" style={{ transform: `translate(-${TranslateAmount(1)}px,0) rotate(${TurnAmount(1)}turn)` }} />

                    <div className="line__vertical" style={{ transform: 'translate(0,0) rotate(0.0turn)' }} />

                    <div className="line__vertical" style={{ transform: `translate(${TranslateAmount(1)}px,0) rotate(-${TurnAmount(1)}turn)` }} />
                    <div className="line__vertical" style={{ transform: `translate(${TranslateAmount(2)}px,0) rotate(-${TurnAmount(2)}turn)` }} />
                    <div className="line__vertical" style={{ transform: `translate(${TranslateAmount(3)}px,0) rotate(-${TurnAmount(3)}turn)` }} />
                    <div className="line__vertical" style={{ transform: `translate(${TranslateAmount(4)}px,0) rotate(-${TurnAmount(4)}turn)` }} />
                    <div className="line__vertical" style={{ transform: `translate(${TranslateAmount(5)}px,0) rotate(-${TurnAmount(5)}turn)` }} />
                    <div className="line__vertical" style={{ transform: `translate(${TranslateAmount(6)}px,0) rotate(-${TurnAmount(6)}turn)` }} />
                    <div className="line__vertical" style={{ transform: `translate(${TranslateAmount(7)}px,0) rotate(-${TurnAmount(7)}turn)` }} />

                    {horizontalLines.map(line =>
                        <div key={line} className="line__horizontal" style={{ animationDelay: '-' + line + 's' }}></div>
                    )}

                </div>

                {/* <div className="synt__background">
                </div> */}
            </div>

        </div>
    );
}

export default Synt;