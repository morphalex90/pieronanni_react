
import sky from '../../img/sky.jpeg';

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

    return (
        <div className="synt">
            <div className="synt__container">
                <div className="synt__top">
                    
                </div>

                <div className="synt__middle">
                </div>

                <div className="synt__bottom">

                    {verticalLines.map(line =>
                        <div key={line} className="line__vertical" style={{ transform: 'translate(' + ((0.25 * (0.65 ** (line)) - 0.25) * 8) + 'px, 0px) rotate(' + ( first_step * (0.975 ** (line)) ) + 'turn)' }}></div>
                    )}

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