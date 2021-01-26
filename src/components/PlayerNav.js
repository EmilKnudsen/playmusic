import "./PlayerCard.css";

export default function PlayerNav () {
    return (
        <div className="playerNav">
            <a class="pnav" href="/"><i class="fas fa-step-backward"></i></a>
            <a class="pnav" href="/"><i class="fas fa-backward"></i></a>
            <a class="pnavPlay" href="/"><i class="fas fa-play"></i></a>
            <a class="pnav" href="/"><i class="fas fa-forward"></i></a>
            <a class="pnav" href="/"><i class="fas fa-step-forward"></i></a>
        </div>
    )
}