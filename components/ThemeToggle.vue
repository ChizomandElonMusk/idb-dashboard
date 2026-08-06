<template>
    <client-only>
        <button type="button" class="theme-toggle-btn" @click="$theme.toggle()">
            <i class="material-icons">{{ $theme.isDark ? 'light_mode' : 'dark_mode' }}</i>
            <span>{{ $theme.isDark ? 'Light mode' : 'Dark mode' }}</span>
        </button>
        <template #placeholder>
            <button type="button" class="theme-toggle-btn" disabled>
                <i class="material-icons">dark_mode</i>
                <span>Dark mode</span>
            </button>
        </template>
    </client-only>
</template>

<script>
export default {
    name: 'ThemeToggle'
}
</script>
