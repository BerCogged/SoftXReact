import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const HistoryDetails = ({history}) => {
    return (  
        <div className="history-details">
        <h4>{history.title}</h4>
        <p><strong>Result: </strong>{history.result}</p>
        <p>{history.createdAt}</p>
    </div>
    );
}
 
export default HistoryDetails;