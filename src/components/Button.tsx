interface Props {
    btnType?: "primary" | "secondary" | "success";
    children: string;
    onClick: () => void;
}

function Button({ btnType = "primary", children, onClick }: Props) {
    return (
        <button
            type="button"
            className={"btn btn-" + btnType}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
