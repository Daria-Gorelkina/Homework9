// BEGIN
export const getMutualFriends = (user1, user2) => {
  const FriendsUser1 = user1.getFriends();
  const FriendsUser2 = user2.getFriends();

  const mutualFriends = FriendsUser1.filter(friend1 => {
    return FriendsUser2.some(friend2 => friend1.id === friend2.id);
  });

  return mutualFriends;
}
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});
