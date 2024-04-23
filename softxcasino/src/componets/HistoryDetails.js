import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const HistoryDetails = ({history}) => {
    console.log(history)
    return (  
        <div className="history-details">
        <h4>{history.title}</h4>
        <p><strong>Result: </strong>{history.result}</p>
        <p>{formatDistanceToNow(new Date(history.createdAt),{addSuffix: true})}</p>
    </div>
    );
}
 
export default HistoryDetails;