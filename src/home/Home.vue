<template>
    <header>
        <h3>fast-form</h3>
    </header>
    <main>
        <aside>
            <slot name="left"></slot>
        </aside>
        <article>
            <nav>
                <slot name="nav"></slot>
            </nav>
            <section>
                <div>
                    <slot name="operation"></slot>
                </div>
                <div>
                    <slot name="coding"></slot>
                </div>
            </section>
        </article>
        <aside>
            <slot name="right"></slot>
        </aside>
    </main>
</template>

<style lang="scss" scoped>
@import './scss/index.scss';
</style>