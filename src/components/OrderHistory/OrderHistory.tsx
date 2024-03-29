import "./OrderHistory.scss"

export type OrderHistory = {
    orderNr: string,
    orderDate: string,
    total: number
}

const OrderHistory = (props: OrderHistory) => {

    return (
        <div className="order">
            <div className="order__order-number-date">
                <p className="order__order-number-date__order-number-text">{props.orderNr}</p>
                <p className="order__order-number-date__order-date-text">{props.orderDate}</p>
            </div>
            <div className="order__total-sum">
                <p>total ordersumma</p>
                <p>{props.total} kr</p>
            </div>
        </div>
    )
}

export default OrderHistory