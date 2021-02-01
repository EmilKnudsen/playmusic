import "./Navigator.css";

export default function Navigator() {
    return (
        <div className="navigator">
            <a className="navWifi" href="/"><i className="fas fa-wifi"></i></a>
            <a className="navMic" href="/"><i className="fas fa-microphone-alt"></i></a>
            <a className="navPod" href="/"><i className="fas fa-podcast"></i></a>
            <a className="navAdjust" href="/"><i className="fas fa-adjust"></i></a>
            <a className="navCpg" href="/"><i className="fas fa-cog"></i></a>
        </div>
    )
}