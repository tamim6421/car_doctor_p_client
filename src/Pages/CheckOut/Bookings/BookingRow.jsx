

const BookingRow = ({booking, handleDelete, handleConfirm}) => {
    const{customerName, service, price, date, email, _id, img, status } = booking
    return (
        <tr>
        <th>
          <label>
          <button onClick={() =>handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask  w-28">
                <img
                  src={img}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
            <p>{service}</p>
            </div>
          </div>
        </td>
        <td>
        {customerName}
        </td>
        <td>
        {date}
        </td>
        <td>
        {email}
        </td>
        <td>{price}</td>
        <th>
        { status === 'confirm'? <span className="text-green-500"> Confirmed</span> :<button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
        </th>
      </tr>
    );f
};

export default BookingRow;