export default function mapAvatarConfigurator(avatarConfigurator: any) {
  const itemsKeys: any[] = Object.keys(avatarConfigurator);

  return itemsKeys.reduce((amount, itemKey) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const item = avatarConfigurator[itemKey];
    if (item === undefined || !item) {
      return amount;
    }

    if (Array.isArray(item)) {
      const mappedItem = item.map((currentItem) => ({
        ...currentItem,
        type: itemKey,
      }));

      amount = [...amount, ...mappedItem];
    } else {
      amount.push({
        ...item,
        type: itemKey,
      });
    }

    return amount;
  }, []);
}
