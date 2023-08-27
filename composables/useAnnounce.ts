import { notification } from 'ant-design-vue';

export default function useAnnounce(bindType: number) {
  const openNotification = () => {
    notification.open({
      message: '没有足够的权限访问该资源',
      description: '服务器端有能力处理该请求，但是拒绝授权访问。',
    });
  };

  const title = ref('');
  const content = ref('');
  onMounted(async () => {
    const { data } = await queryAnnounce(bindType);
    try {
      if (data.value?.msg.businessCode === 0) {
        title.value = data.value.obj.title;
        content.value = data.value.obj.content;
      }
    } catch (error) {
      openNotification();
    }
  });
  return { title, content };
}
