import React, {useState, useEffect,memo} from "react"
import "./style.scss"

const Pagination = ({currentButton, setCurrentButton, page}) => {
    const [arrayOfCurrentButton, setArrayOfCurrentButton] = useState([])
    let numberOfPage = []
    for (let i = 1; i <= page; i++) {
        numberOfPage = [...numberOfPage, i]
    }
    useEffect(() => {
        let tempNumberOfPages = [...arrayOfCurrentButton]
        if (page < 7) {
            tempNumberOfPages = [...numberOfPage]
        } else {
            const dotsInitial = "..."
            const dotsLeft = "... "
            const dotsRight = " ..."

            if (currentButton >= 1 && currentButton <= 3) {
                tempNumberOfPages = [1, 2, 3, 4, 5, dotsInitial, numberOfPage.length]
            } else if (currentButton === 5) {
                const sliced = numberOfPage.slice(0, 5)
                tempNumberOfPages = [...sliced, dotsInitial, numberOfPage.length]
            } else if (currentButton > 4 && currentButton < numberOfPage.length - 2) {
                const sliced1 = numberOfPage.slice(currentButton - 2, currentButton)
                const sliced2 = numberOfPage.slice(currentButton, currentButton + 1)
                tempNumberOfPages = [1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numberOfPage.length]
            } else if (currentButton >= numberOfPage.length - 2) {
                const sliced = numberOfPage.slice(numberOfPage.length - 5, numberOfPage.length)
                tempNumberOfPages = [1, dotsLeft, ...sliced]
            } else if (currentButton === dotsInitial) {
                setCurrentButton(arrayOfCurrentButton[arrayOfCurrentButton.length - 3] + 1)
            } else if (currentButton === dotsLeft) {
                setCurrentButton(arrayOfCurrentButton[3] - 2)
            } else if (currentButton === dotsRight) {
                setCurrentButton(arrayOfCurrentButton[3] + 2)
            }
        }
        setArrayOfCurrentButton(tempNumberOfPages)

    }, [currentButton, page])

    return (
        <div className="pagination-block">
            <ul className="kompete-pagination">
                <li onClick={() =>
                    setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}>&#8249;</li>
                {
                    arrayOfCurrentButton.map((page, i) =>
                        <li
                            onClick={() => setCurrentButton(page)}
                            className={currentButton === page ? "active" : ""}
                            key={i}>
                            {page}
                        </li>
                    )
                }
                <li onClick={() => setCurrentButton((prev) => numberOfPage.length === prev ? prev : prev + 1)}>&#8250;</li>
            </ul>
        </div>
    )
}
export default memo(Pagination)