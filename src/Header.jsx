function Header (props) {
    const {title, subtitle} = props

    return (
        <>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </>
    )
}

export default Header