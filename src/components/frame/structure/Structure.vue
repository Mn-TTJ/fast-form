<template>
    <header>
        <h3>Fast-Form&nbsp;Ver1.0</h3>
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