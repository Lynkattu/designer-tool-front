import './moodboard.css'
import Topbar from '../../components/layout/topbar/topbar';
import { useState } from 'react';
import { Circle, Layer, Rect, Stage, Text } from 'react-konva';

function Moodboard() {
    const [rectPosition, setRectPosition] = useState({ x: 100, y: 100 });
    const [circlePosition, setCirclePosition] = useState({ x: 220, y: 150 });

    return (
        <div className="moodboard">
            <Topbar />
            <div className='moodboard-content'>
                <section className="moodboard-container">
                    <Stage width={window.innerWidth} height={window.innerHeight}>
                        <Layer>
                            <Text text="Try to drag shapes" fontSize={15} />
                            <Rect
                                x={rectPosition.x}
                                y={rectPosition.y}
                                width={100}
                                height={100}
                                fill="red"
                                shadowBlur={10}
                                draggable
                                onDragEnd={(e) => setRectPosition(e.target.position())}
                            />
                            <Circle
                                x={circlePosition.x}
                                y={circlePosition.y}
                                radius={50}
                                fill="green"
                                draggable
                                onDragEnd={(e) => setCirclePosition(e.target.position())}
                            />
                        </Layer>
                    </Stage>
                </section>
                <section className="moodboard-tools">

                </section>
            </div>
        </div>
    );
}

export default Moodboard;