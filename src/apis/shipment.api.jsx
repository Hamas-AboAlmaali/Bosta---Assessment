const fetchShippingData = async (shipmentId) => {
  try {
    const response = await fetch(`https://tracking.bosta.co/shipments/track/${shipmentId}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export default fetchShippingData