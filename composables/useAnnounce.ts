import type { AnnounceRes } from '~/api/announce';

export default function useAnnounce(bindType: number) {
  const title = ref('');
  const content = ref('');
  onMounted(async () => {
    const { data } = await queryAnnounce(bindType);
    if (data.value?.msg.businessCode === 0) {
      title.value = data.value.obj.title;
      content.value = data.value.obj.content;
    }
  });
  return { title, content };
}
