import "./Navigator.css";

export default function Navigator() {
    return (
        <div className="navigator">
            <a class="navWifi" href="/"><i class="fas fa-wifi"></i></a>
            <a class="navMic" href="/"><i class="fas fa-microphone-alt"></i></a>
            <a class="navPod" href="/"><i class="fas fa-podcast"></i></a>
            <a class="navAdjust" href="/"><i class="fas fa-adjust"></i></a>
            <a class="navCpg" href="/"><i class="fas fa-cog"></i></a>
        </div>
    )
}