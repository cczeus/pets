export default function getQueueName(queueType) {
  if(queueType === "RANKED_FLEX_SR") {
    return 'Flex 5v5';
  } else if (queueType === "RANKED_SOLO_5x5") {
     return 'Ranked Solo';
  } else if(queueType === "RANKED_FLEX_TT") {
    return 'Ranked 3v3';
  }
}