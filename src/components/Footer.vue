<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__content">
                <div class="footer__column">
                    <div class="footer__logo logo">
                        <p>Exclusive</p>
                    </div>

                    <h4 class="footer__subtitle">Subscribe</h4>
                    <p class="footer__item">Get 10% off your first order</p>

                    <form class="footer__email" @submit.prevent="submitForm">
                        <input
                            type="email"
                            class="footer__email-input"
                            :class="{ error: emailError }"
                            placeholder="Enter your email"
                            v-model="email"
                            @input="emailError = false">

                        <button type="submit" class="footer__email-submit">
                            <img src="@/assets/images/icons/submit.svg" alt="submit">
                        </button>
                    </form>
                </div>

                <div class="footer__column">
                    <h4 class="footer__subtitle">Support</h4>

                    <p class="footer__item">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <a href="mailto:exclusive@gmail.com" class="footer__item">exclusive@gmail.com</a>
                    <a href="tel:+88015-88888-9999" class="footer__item">+88015-88888-9999</a>
                </div>

                <div class="footer__column">
                    <h4 class="footer__subtitle">Account</h4>

                    <a href="#" class="footer__item">My Account</a>
                    <a href="#" class="footer__item">Login / Register</a>
                    <a href="#" class="footer__item">Cart</a>
                    <a href="#" class="footer__item">Wishlist</a>
                    <a href="#" class="footer__item">Shop</a>
                </div>

                <div class="footer__column">
                    <h4 class="footer__subtitle">Account</h4>

                    <a href="#" class="footer__item">Privacy Policy</a>
                    <a href="#" class="footer__item">Terms Of Use</a>
                    <a href="#" class="footer__item">FAQ</a>
                    <a href="#" class="footer__item">Contact</a>
                </div>

                <div class="footer__column">
                    <h4 class="footer__subtitle">Download App</h4>

                    <span>Save $3 with App New User Only</span>

                    <div class="footer__app">
                        <div class="footer__qr"><img src="@/assets/images/qr.png" alt="qr"></div>
                        <a href="#"><img src="@/assets/images/google-play.png" alt="google play"></a>
                        <a href="#"><img src="@/assets/images/appstore.png" alt="app store"></a>
                    </div>

                    <div class="footer__social">
                        <a href="#" class="footer__social-link"><img src="@/assets/images/icons/facebook.svg" alt="facebook"></a>
                        <a href="#" class="footer__social-link"><img src="@/assets/images/icons/twitter.svg" alt="twitter"></a>
                        <a href="#" class="footer__social-link"><img src="@/assets/images/icons/instagram.svg" alt="instagram"></a>
                        <a href="#" class="footer__social-link"><img src="@/assets/images/icons/linkedin.svg" alt="linkedin"></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <div class="copyright">
        <p>
            <img src="@/assets/images/icons/copyright.svg" alt="©">
            Copyright Rimel 2022. All right reserved
        </p>
    </div>
</template>

<script>
    import { useToast } from "vue-toastification";

    export default {
        data() {
            return {
                email: "",
                emailError: false,
            };
        },
        methods: {
            validateEmail() {
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                return emailRegex.test(this.email) 
            },
            async submitForm() {
                const result = await this.validateEmail();

                if(result) {
                    this.toast.success("Email sent successfully");
                    this.email = "";
                    this.emailError = false;
                } else {
                    this.toast.error("Please enter a valid email address");
                    this.emailError = true;
                }
            }
        },
        setup() {
            const toast = useToast();

            return {
                toast
            }
        }
    }
</script>

<style lang="scss" scoped>
    .footer {
        background-color: $black;
        padding: 3rem 0;
        color: #fafafa;
        &__content {
            @include grid(5, 1rem);
        }
        &__subtitle {
            font-size: 1.25rem;
            font-weight: 500;
            margin: 0 0 1.75rem 0;
            line-height: 1;
        }
        &__column {
            max-width: 200px;
            &:last-child {
                span {
                    display: block;
                    font-size: 0.75rem;
                    margin-bottom: 1rem;
                }
            }
        }
        &__item {
            font-size: 0.875rem;
            display: block;
            text-decoration: none;
            color: inherit;
            line-height: 1.5;
            &:not(:last-child) {
                margin-bottom: 1rem;
            }
        }
        &__logo {
            margin-bottom: 1.75rem;
        }
        &__email {
            position: relative;
            height: 2.75rem;
            max-width: 200px;
            &-input {
                display: block;
                background-color: transparent;
                border: 1px solid #fafafa;
                border-radius: 0.25rem;
                padding: 0.75rem 3rem 0.75rem 1rem;
                color: #fafafa;
                font-weight: 400;
                width: 100%;
                height: 100%;
                font-size: 0.875rem;
                outline: none;
                transition: $transition;
                &.error {
                    border-color: $error;
                }
                &::placeholder {
                    color: rgba($color: #fafafa, $alpha: 0.4);
                }
            }
            &-submit {
                @include flex-center;
                position: absolute;
                top: 0;
                right: 0;
                width: 2.75rem;
                height: 100%;
                background-color: transparent;
                cursor: pointer;
                border-top-right-radius: 0.25rem;
                border-bottom-right-radius: 0.25rem;
                &,
                img {
                    transition: $transition;
                }
                &:hover {
                    background-color: #fafafa;
                    img {
                        filter: invert(1);
                    }
                }
            }
        }
        &__app {
            display: grid;
            grid-template-columns: repeat(2, auto);
            grid-template-rows: auto auto;
            align-items: center;
            grid-gap: 0.25rem 0.5rem;
            a {
                display: block;
            }
            img {
                width: 100%;
            }
            & > *:first-child {
                grid-row: 1/3;
            }
        }
        &__social {
            @include flex-center-vert;
            margin-top: 1rem;
            gap: 1rem;
            a {
                display: block;
            }
        }
    }

    .copyright {
        background-color: $black;
        padding: 1rem;
        p {
            @include flex-center;
            gap: 0.5rem;
            color: $white;
            font-weight: normal;
            opacity: 0.4;
            margin: 0;
            line-height: 1;
        }
    }
</style>