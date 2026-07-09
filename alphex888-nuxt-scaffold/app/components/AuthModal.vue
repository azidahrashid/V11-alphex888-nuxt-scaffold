<script setup lang="ts">
const { isOpen, mode, closeAuth, switchAuth } = useAuthModal()

const loginForm = reactive({
  username: '',
  password: ''
})

const registerForm = reactive({
  username: '',
  phone: '',
  password: '',
  confirmPassword: '',
  agree: false
})

const errors = reactive<Record<string, string>>({})
const status = ref('')

watch(mode, () => {
  clearFeedback()
})

watch(isOpen, (open) => {
  if (!open) clearFeedback()
})

const modalTitle = computed(() => mode.value === 'login' ? 'LOGIN' : 'JOIN')
const modalSubtitle = computed(() => mode.value === 'login' ? '알파벳 데모 로그인' : '프론트엔드 데모 회원가입')

function clearFeedback() {
  status.value = ''
  Object.keys(errors).forEach(key => delete errors[key])
}

function setError(key: string, message: string) {
  errors[key] = message
}

function validateLogin() {
  clearFeedback()
  if (loginForm.username.trim().length < 3) setError('loginUsername', '아이디는 3자 이상 입력하세요.')
  if (loginForm.password.length < 6) setError('loginPassword', '비밀번호는 6자 이상 입력하세요.')
  return Object.keys(errors).length === 0
}

function validateRegister() {
  clearFeedback()
  const phoneValue = registerForm.phone.replace(/[^0-9]/g, '')
  if (registerForm.username.trim().length < 3) setError('registerUsername', '아이디는 3자 이상 입력하세요.')
  if (phoneValue.length < 8) setError('registerPhone', '전화번호는 숫자 8자리 이상 입력하세요.')
  if (registerForm.password.length < 6) setError('registerPassword', '비밀번호는 6자 이상 입력하세요.')
  if (registerForm.password !== registerForm.confirmPassword) setError('registerConfirm', '비밀번호 확인이 일치하지 않습니다.')
  if (!registerForm.agree) setError('registerAgree', '데모 이용 안내에 동의해야 합니다.')
  return Object.keys(errors).length === 0
}

function submitLogin() {
  if (!validateLogin()) return
  status.value = 'Demo login validated. No real session or backend request was created.'
}

function submitRegister() {
  if (!validateRegister()) return
  status.value = 'Demo registration validated. No account, wallet, payment, or backend request was created.'
}
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="isOpen" class="auth-modal" role="dialog" aria-modal="true" :aria-label="modalTitle" @click.self="closeAuth">
      <section class="auth-dialog">
        <button type="button" class="modal-close" aria-label="Close auth modal" @click="closeAuth">×</button>

        <div class="auth-dialog-head">
          <img src="/assets/alphex/logo-mark.svg" alt="" aria-hidden="true">
          <p>{{ modalSubtitle }}</p>
          <h2>{{ modalTitle }}</h2>
        </div>

        <div class="auth-tabs" role="tablist" aria-label="Auth mode">
          <button type="button" :class="{ active: mode === 'login' }" @click="switchAuth('login')">LOGIN</button>
          <button type="button" :class="{ active: mode === 'register' }" @click="switchAuth('register')">JOIN</button>
        </div>

        <form v-if="mode === 'login'" class="auth-form" novalidate @submit.prevent="submitLogin">
          <label>
            <span>아이디</span>
            <input v-model.trim="loginForm.username" type="text" autocomplete="username" placeholder="아이디 입력">
            <em v-if="errors.loginUsername">{{ errors.loginUsername }}</em>
          </label>
          <label>
            <span>비밀번호</span>
            <input v-model="loginForm.password" type="password" autocomplete="current-password" placeholder="비밀번호 입력">
            <em v-if="errors.loginPassword">{{ errors.loginPassword }}</em>
          </label>
          <button type="submit" class="btn btn-join btn-full">LOGIN</button>
        </form>

        <form v-else class="auth-form" novalidate @submit.prevent="submitRegister">
          <label>
            <span>아이디</span>
            <input v-model.trim="registerForm.username" type="text" autocomplete="username" placeholder="3자 이상">
            <em v-if="errors.registerUsername">{{ errors.registerUsername }}</em>
          </label>
          <label>
            <span>전화번호</span>
            <input v-model.trim="registerForm.phone" type="tel" inputmode="numeric" autocomplete="tel" placeholder="숫자만 입력">
            <em v-if="errors.registerPhone">{{ errors.registerPhone }}</em>
          </label>
          <label>
            <span>비밀번호</span>
            <input v-model="registerForm.password" type="password" autocomplete="new-password" placeholder="6자 이상">
            <em v-if="errors.registerPassword">{{ errors.registerPassword }}</em>
          </label>
          <label>
            <span>비밀번호 확인</span>
            <input v-model="registerForm.confirmPassword" type="password" autocomplete="new-password" placeholder="비밀번호 재입력">
            <em v-if="errors.registerConfirm">{{ errors.registerConfirm }}</em>
          </label>
          <label class="check-row">
            <input v-model="registerForm.agree" type="checkbox">
            <span>프론트엔드 데모이며 실제 계정, 지갑, 결제 기능이 없음을 확인합니다.</span>
          </label>
          <em v-if="errors.registerAgree" class="form-error">{{ errors.registerAgree }}</em>
          <button type="submit" class="btn btn-join btn-full">JOIN NOW</button>
        </form>

        <p v-if="status" class="auth-status">{{ status }}</p>
        <p class="auth-note">Demo interaction only. No gambling, wallet, payment, or private backend function is implemented.</p>
      </section>
    </div>
  </Transition>
</template>
