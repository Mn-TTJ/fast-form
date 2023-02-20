import { computed } from 'vue';
import { store } from '@/core/store/store';
export default function () {
    const labels = computed(() => store.classSet)

    return { labels }
}