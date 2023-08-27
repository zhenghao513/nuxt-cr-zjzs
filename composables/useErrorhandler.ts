export default function useErrorhandler(callbackFn: () => void) {
  const openNotification = () => {
    notification.open({
      message: '没有足够的权限访问该资源',
      description: '服务器端有能力处理该请求，但是拒绝授权访问。',
    });
  };

  try {
    callbackFn();
  } catch (error) {
    openNotification();
  }
}
