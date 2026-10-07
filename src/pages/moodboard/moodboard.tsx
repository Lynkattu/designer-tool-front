import './moodboard.css'
import Topbar from '../../components/layout/topbar/topbar';
import { useContext, useEffect, useState } from 'react';
import { Circle, Layer, Rect, Stage } from 'react-konva';
import { UserAuthContext } from '../../context/userAuthContext';
import { useNavigate } from 'react-router-dom';
import DesignerSidebar from '../../components/layout/designerSidebar/designerSidebar';

function Moodboard() {
    const navigate = useNavigate();
    const { user } = useContext(UserAuthContext);

    const [rectPosition, setRectPosition] = useState({ x: 100, y: 100 });
    const [circlePosition, setCirclePosition] = useState({ x: 220, y: 150 });

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
        
    }, [user]);

    return (
        <div className="moodboard">
            <Topbar />
            <div className='moodboard-content'>
                <div className="moodboard-canvas">
                    <Stage width={window.innerWidth} height={window.innerHeight}>
                        <Layer>
                            <Rect
                                x={rectPosition.x}
                                y={rectPosition.y}
                                width={100}
                                height={100}
                                rotation={45}
                                opacity={0.5}
                                fill="red"
                                shadowBlur={10}
                                draggable
                                onDragEnd={(e) => setRectPosition(e.target.position())}
                            />
                            <Circle
                                x={circlePosition.x}
                                y={circlePosition.y}
                                radius={50}
                                opacity={0.5}
                                fill="green"
                                draggable
                                onDragEnd={(e) => setCirclePosition(e.target.position())}
                            />
                        </Layer>
                    </Stage>
                </div>
                <div className="moodboard-sidebar">
                    <DesignerSidebar />
                </div>
            </div>
        </div>
    );
}

export default Moodboard;