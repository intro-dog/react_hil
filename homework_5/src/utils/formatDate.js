const formatDate = (dateString) => {
  const date = new Date(dateString)
  const options = {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }
  return date.toLocaleString("en-US", options)
}

export default formatDate
