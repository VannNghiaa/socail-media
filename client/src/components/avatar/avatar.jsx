import "./avatar.css"

function Avatar({ width = 35, height = 35 }) {
    // console.log(width, 150, height, 150);
    return (
        <div className="avatar">
            <img
                width={width}
                height={height}
                src="https://i.pravatar.cc/300" alt="avatar"
            />
        </div>
    )
}

export default Avatar;

