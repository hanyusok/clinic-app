<template>
  <!-- Navbar -->
  <nav
    class="top-0 navbar navbar-expand-lg position-absolute z-index-3"
    :class="isBlur ? isBlur : 'shadow-none my-2 navbar-transparent w-100'"
  >
    <div class="container">
      <a
        class="navbar-brand font-weight-bolder ms-lg-0 ms-3"
        :class="darkMode ? 'text-black' : 'text-white'"
        href="/"
        >콜닥 PRO</a
      >
      <button
        class="shadow-none navbar-toggler ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="mt-2 navbar-toggler-icon">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div id="navigation" class="pt-3 pb-2 collapse navbar-collapse w-100 py-lg-0">
        <ul class="mx-auto navbar-nav navbar-nav-hover">
          <li class="mx-2 nav-item dropdown dropdown-hover">
            <a
              id="dropdownMenuPages"
              role="button"
              class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center"
              :class="[darkModes]"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
              <img
                :src="downArrWhite"
                alt="down-arrow"
                class="arrow ms-1"
                :class="darkMode ? 'd-none' : 'd-lg-block d-none'"
              />
              <img
                :src="downArrBlack"
                alt="down-arrow"
                class="arrow ms-1 d-block"
                :class="darkMode ? 'd-lg-block' : 'd-lg-none'"
              />
            </a>
            <div
              class="p-3 mt-0 dropdown-menu dropdown-menu-animation dropdown-xl border-radius-xl mt-lg-3"
              aria-labelledby="dropdownMenuPages"
            >
              <div class="row d-none d-lg-block">
                <div class="px-4 py-2 col-12">
                  <div class="row">
                    <div class="">
                      <div
                        class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                      >
                        <div class="d-inline-block">
                          <div
                            class="text-center icon icon-shape icon-xs border-radius-md bg-gradient-success me-2 d-flex align-items-center justify-content-center ps-0"
                          >
                            <icon name="box3d" />
                          </div>
                        </div>
                        Account
                      </div>
                      <router-link
                        :to="{ name: 'Error' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Error</span>
                      </router-link>
                      <router-link
                        :to="{ name: 'NewUser' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">NewUser</span>
                      </router-link>
                      <router-link
                        :to="{ name: 'Security' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">Security</span>
                      </router-link>
                      <router-link
                        :to="{ name: 'CRM' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span class="ps-3">CRM</span>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
              <!-- responsive -->
              <!-- responsive -->
              <!-- responsive -->
              <!-- responsive -->
              <div class="d-lg-none">
                <div
                  class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                >
                  <div class="d-inline-block">
                    <div
                      class="text-center icon icon-shape icon-xs border-radius-md bg-gradient-success me-2 d-flex align-items-center justify-content-center ps-0"
                    >
                      <icon name="office" />
                    </div>
                  </div>
                  Users
                </div>
                <!-- <router-link
                  :to="{ name: 'Reports' }"
                  class="dropdown-item border-radius-md"
                >Reports</router-link>
                <router-link to="#" class="dropdown-item border-radius-md">New user</router-link> -->
                <div
                  class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                >
                  <div class="d-inline-block">
                    <div
                      class="text-center icon icon-shape icon-xs border-radius-md bg-gradient-success me-2 d-flex align-items-center justify-content-center ps-0"
                    >
                      <icon name="customer-support" />
                    </div>
                  </div>
                  Profile
                </div>
                <!-- <router-link
                  :to="{ name: 'Overview' }"
                  class="dropdown-item border-radius-md"
                >Overview</router-link>
                <router-link :to="{ name: 'Teams' }" class="dropdown-item border-radius-md">Teams</router-link>
                <router-link to="#" class="dropdown-item border-radius-md">Projects</router-link> -->
                <div
                  class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                >
                  <div class="d-inline-block">
                    <div
                      class="text-center icon icon-shape icon-xs border-radius-md bg-gradient-success me-2 d-flex align-items-center justify-content-center ps-0"
                    >
                      <icon name="customer-support" />
                    </div>
                  </div>
                  Projects
                </div>
                <router-link
                  :to="{ name: 'Pricing' }"
                  class="dropdown-item border-radius-md"
                  >Pricing</router-link
                >
                <router-link
                  :to="{ name: 'Pricing' }"
                  class="dropdown-item border-radius-md"
                  >Timeline</router-link
                >
                <router-link
                  :to="{ name: 'ProductsList' }"
                  class="dropdown-item border-radius-md"
                  >New Project</router-link
                >
                <div
                  class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                >
                  <div class="d-inline-block">
                    <div
                      class="text-center icon icon-shape icon-xs border-radius-md bg-gradient-success me-2 d-flex align-items-center justify-content-center ps-0"
                    >
                      <icon name="box3d" />
                    </div>
                  </div>
                  Account
                </div>
                <router-link
                  :to="{ name: 'Error' }"
                  class="dropdown-item border-radius-md"
                  >Error</router-link
                >
                <router-link
                  :to="{ name: 'Error' }"
                  class="dropdown-item border-radius-md"
                  >Billing</router-link
                >
                <router-link :to="{ name: 'CRM' }" class="dropdown-item border-radius-md"
                  >Invoice</router-link
                >
                <router-link
                  :to="{ name: 'Security' }"
                  class="dropdown-item border-radius-md"
                  >Security</router-link
                >
                <div
                  class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                >
                  <div class="d-inline-block">
                    <div
                      class="text-center icon icon-shape icon-xs border-radius-md bg-gradient-success me-2 d-flex align-items-center justify-content-center ps-0"
                    >
                      <icon name="spaceship" />
                    </div>
                  </div>
                  Extra
                </div>
                <router-link
                  :to="{ name: 'Pricing' }"
                  class="dropdown-item border-radius-md"
                  >Pricing Page</router-link
                >
                <router-link
                  :to="{ name: 'Pricing' }"
                  class="dropdown-item border-radius-md"
                  >RTL Page</router-link
                >
                <router-link
                  :to="{ name: 'Pricing' }"
                  class="dropdown-item border-radius-md"
                  >Widgets</router-link
                >
              </div>
            </div>
          </li>
          <li class="mx-2 nav-item dropdown dropdown-hover">
            <a
              id="dropdownMenuAccount"
              role="button"
              class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center"
              :class="[darkModes]"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Authentication
              <img
                :src="downArrWhite"
                alt="down-arrow"
                class="arrow ms-1"
                :class="darkMode ? 'd-none' : 'd-lg-block d-none'"
              />
              <img
                :src="downArrBlack"
                alt="down-arrow"
                class="arrow ms-1 d-block"
                :class="darkMode ? 'd-lg-block' : 'd-lg-none'"
              />
            </a>
            <div
              class="p-3 mt-0 dropdown-menu dropdown-menu-animation dropdown-lg border-radius-xl mt-lg-3"
              aria-labelledby="dropdownMenuAccount"
            >
              <div class="row d-none d-lg-flex">
                <!-- <div class="col-6"></div> -->
                <div class="col-6 ps-0 d-flex justify-content-center flex-column">
                  <ul class="list-group">
                    <li
                      class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                    >
                      <a
                        id="dropdownSignIn"
                        class="mb-1 dropdown-item border-radius-md ps-3 d-flex align-items-center justify-content-between"
                      >
                        <span>Sign In</span>
                        <img
                          src="@/assets/img/down-arrow.svg"
                          alt="down-arrow"
                          class="arrow"
                        />
                      </a>
                    </li>
                    <li
                      class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                    >
                      <a
                        id="dropdownSignUp"
                        class="mb-1 dropdown-item border-radius-md ps-3 d-flex align-items-center justify-content-between"
                      >
                        <span>Sign Up</span>
                        <img
                          src="@/assets/img/down-arrow.svg"
                          alt="down-arrow"
                          class="arrow"
                        />
                      </a>
                      <div
                        class="px-2 py-3 mt-0 dropdown-menu"
                        aria-labelledby="dropdownSignUp"
                      >
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Signup' }"
                        >
                          <span>Signup</span>
                        </router-link>
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Signup' }"
                        >
                          <span>Signup</span>
                        </router-link>
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Signup' }"
                        >
                          <span>Illustration</span>
                        </router-link>
                      </div>
                    </li>
                    <li
                      class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                    >
                      <a
                        id="dropdownPasswordReset"
                        class="mb-1 dropdown-item border-radius-md ps-3 d-flex align-items-center justify-content-between"
                      >
                        <span>Reset Password</span>
                        <img
                          src="@/assets/img/down-arrow.svg"
                          alt="down-arrow"
                          class="arrow"
                        />
                      </a>
                      <div
                        class="px-2 py-3 mt-0 dropdown-menu"
                        aria-labelledby="dropdownPasswordReset"
                      >
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Pricing' }"
                        >
                          <span>Basic</span>
                        </router-link>
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Signup' }"
                        >
                          <span>Signup</span>
                        </router-link>
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Signin' }"
                        >
                          <span>Illustration</span>
                        </router-link>
                      </div>
                    </li>
                    <li
                      class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                    >
                      <a
                        id="dropdownLock"
                        class="mb-1 dropdown-item border-radius-md ps-3 d-flex align-items-center justify-content-between"
                      >
                        <span>Lock</span>
                        <img
                          src="@/assets/img/down-arrow.svg"
                          alt="down-arrow"
                          class="arrow"
                        />
                      </a>
                      <div
                        class="px-2 py-3 mt-0 dropdown-menu"
                        aria-labelledby="dropdownLock"
                      >
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'NewUser' }"
                        >
                          <span>Basic</span>
                        </router-link>
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Signup' }"
                        >
                          <span>Signup</span>
                        </router-link>
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Signin' }"
                        >
                          <span>Signin</span>
                        </router-link>
                      </div>
                    </li>
                    <li
                      class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                    >
                      <a
                        id="dropdown2fa"
                        class="mb-1 dropdown-item border-radius-md ps-3 d-flex align-items-center justify-content-between"
                      >
                        <span>2-Step Verification</span>
                        <img
                          src="@/assets/img/down-arrow.svg"
                          alt="down-arrow"
                          class="arrow"
                        />
                      </a>
                      <div
                        class="px-2 py-3 mt-0 dropdown-menu"
                        aria-labelledby="dropdown2fa"
                      >
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Pricing' }"
                        >
                          <span>Basic</span>
                        </router-link>
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Pricing' }"
                        >
                          <span>Cover</span>
                        </router-link>
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Pricing' }"
                        >
                          <span>Illustration</span>
                        </router-link>
                      </div>
                    </li>
                    <li
                      class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                    >
                      <a
                        id="dropdownError"
                        class="mb-1 dropdown-item border-radius-md ps-3 d-flex align-items-center justify-content-between"
                      >
                        <span>Error</span>
                        <img
                          src="@/assets/img/down-arrow.svg"
                          alt="down-arrow"
                          class="arrow"
                        />
                      </a>
                      <div
                        class="px-2 py-3 mt-0 dropdown-menu"
                        aria-labelledby="dropdownError"
                      >
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Error' }"
                        >
                          <span>404</span>
                        </router-link>
                        <router-link
                          class="mb-1 dropdown-item ps-3 border-radius-md"
                          :to="{ name: 'Error' }"
                        >
                          <span>500</span>
                        </router-link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="d-lg-none">
                <div class="col-12 d-flex justify-content-center flex-column">
                  <h6
                    class="px-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                  >
                    Sign In
                  </h6>
                  <router-link
                    :to="{ name: 'Signin' }"
                    class="dropdown-item border-radius-md"
                    >Basic</router-link
                  >
                  <router-link
                    :to="{ name: 'Signin' }"
                    class="dropdown-item border-radius-md"
                    >Cover</router-link
                  >
                  <router-link
                    :to="{ name: 'Signup' }"
                    class="dropdown-item border-radius-md"
                    >Illustration</router-link
                  >
                  <h6
                    class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                  >
                    Sign Up
                  </h6>
                  <router-link
                    :to="{ name: 'Signup' }"
                    class="dropdown-item border-radius-md"
                    >Basic</router-link
                  >
                  <router-link
                    :to="{ name: 'Signup' }"
                    class="dropdown-item border-radius-md"
                    >Cover</router-link
                  >
                  <router-link
                    :to="{ name: 'Signup' }"
                    class="dropdown-item border-radius-md"
                    >Illustration</router-link
                  >
                  <h6
                    class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                  >
                    Reset Password
                  </h6>
                  <router-link
                    :to="{ name: 'Pricing' }"
                    class="dropdown-item border-radius-md"
                    >Basic</router-link
                  >
                  <router-link
                    :to="{ name: 'Pricing' }"
                    class="dropdown-item border-radius-md"
                    >Cover</router-link
                  >
                  <router-link
                    :to="{ name: 'Pricing' }"
                    class="dropdown-item border-radius-md"
                    >Illustation</router-link
                  >
                  <h6
                    class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                  >
                    Lock
                  </h6>
                  <router-link
                    :to="{ name: 'Pricing' }"
                    class="dropdown-item border-radius-md"
                    >Basic</router-link
                  >
                  <router-link
                    :to="{ name: 'Pricing' }"
                    class="dropdown-item border-radius-md"
                    >Cover</router-link
                  >
                  <router-link
                    :to="{ name: 'Pricing' }"
                    class="dropdown-item border-radius-md"
                    >Illustration</router-link
                  >
                  <h6
                    class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                  >
                    2-Step Verification
                  </h6>
                  <router-link
                    :to="{ name: 'Pricing' }"
                    class="dropdown-item border-radius-md"
                    >Basic</router-link
                  >
                  <router-link
                    :to="{ name: 'NewUser' }"
                    class="dropdown-item border-radius-md"
                    >Cover</router-link
                  >
                  <router-link
                    :to="{ name: 'NewUser' }"
                    class="dropdown-item border-radius-md"
                    >Illustration</router-link
                  >
                  <h6
                    class="px-0 mt-3 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                  >
                    Error
                  </h6>
                  <router-link
                    :to="{ name: 'Error' }"
                    class="dropdown-item border-radius-md"
                    >Error</router-link
                  >
                  <router-link
                    :to="{ name: 'Error' }"
                    class="dropdown-item border-radius-md"
                    >Error</router-link
                  >
                </div>
              </div>
            </div>
          </li>

          <li class="mx-2 nav-item dropdown dropdown-hover">
            <a
              id="dropdownMenuBlocks"
              role="button"
              class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center"
              :class="[darkModes]"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Applications
              <img
                :src="downArrWhite"
                alt="down-arrow"
                class="arrow ms-1"
                :class="darkMode ? 'd-none' : 'd-lg-block d-none'"
              />
              <img
                :src="downArrBlack"
                alt="down-arrow"
                class="arrow ms-1 d-block"
                :class="darkMode ? 'd-lg-block' : 'd-lg-none'"
              />
            </a>
            <div
              class="p-3 mt-0 dropdown-menu dropdown-menu-animation dropdown-md dropdown-md-responsive border-radius-lg mt-lg-3"
              aria-labelledby="dropdownMenuBlocks"
            >
              <div class="d-none d-lg-block">
                <ul class="list-group">
                  <li
                    class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                  >
                    <router-link
                      class="py-2 dropdown-item ps-3 border-radius-md"
                      :to="{ name: 'Signup' }"
                    >
                      <div class="d-flex">
                        <div class="h-10 mt-1 icon me-3 d-flex">
                          <i class="ni ni-single-copy-04 text-gradient text-success"></i>
                        </div>
                        <div
                          class="w-100 d-flex align-items-center justify-content-between"
                        >
                          <div>
                            <p class="p-0 dropdown-header text-dark">Kanban</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </li>
                  <li
                    class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                  >
                    <!-- <router-link
                      class="py-2 dropdown-item ps-3 border-radius-md"
                      :to="{ name: 'Wizard' }"
                    >
                      <div class="d-flex">
                        <div class="h-10 mt-1 icon me-3 d-flex">
                          <i class="ni ni-laptop text-gradient text-success"></i>
                        </div>
                        <div class="w-100 d-flex align-items-center justify-content-between">
                          <div>
                            <p class="p-0 dropdown-header text-dark">Signup</p>
                          </div>
                        </div>
                      </div>
                    </router-link> -->
                  </li>
                  <li
                    class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                  >
                    <!-- <router-link
                      class="py-2 dropdown-item ps-3 border-radius-md"
                      :to="{ name: 'Signin' }"
                    >
                      <div class="d-flex">
                        <div class="h-10 mt-1 icon me-3 d-flex">
                          <i class="ni ni-badge text-gradient text-success"></i>
                        </div>
                        <div class="w-100 d-flex align-items-center justify-content-between">
                          <div>
                            <p class="p-0 dropdown-header text-dark">DataTables</p>
                          </div>
                        </div>
                      </div>
                    </router-link> -->
                  </li>
                  <li
                    class="p-0 border-0 nav-item dropdown dropdown-hover dropdown-subitem list-group-item"
                  >
                    <!-- <router-link
                      class="py-2 dropdown-item ps-3 border-radius-md"
                      :to="{ name: 'Calendar' }"
                    >
                      <div class="d-flex">
                        <div class="h-10 mt-1 icon me-3 d-flex">
                          <i class="ni ni-notification-70 text-gradient text-success"></i>
                        </div>
                        <div class="w-100 d-flex align-items-center justify-content-between">
                          <div>
                            <p class="p-0 dropdown-header text-dark">Calendar</p>
                          </div>
                        </div>
                      </div>
                    </router-link> -->
                  </li>
                </ul>
              </div>
              <!-- responsive -->
              <div class="row d-lg-none">
                <div class="col-md-12">
                  <router-link class="py-2 ps-3 border-radius-md" :to="{ name: 'CRM' }">
                    <div class="d-flex">
                      <div class="h-10 mt-1 icon me-3 d-flex">
                        <i class="ni ni-single-copy-04 text-gradient text-success"></i>
                      </div>
                      <div
                        class="w-100 d-flex align-items-center justify-content-between"
                      >
                        <div>
                          <p class="p-0 dropdown-header text-dark">CRM</p>
                        </div>
                      </div>
                    </div>
                  </router-link>
                  <router-link class="py-2 ps-3 border-radius-md" :to="{ name: 'CRM' }">
                    <div class="d-flex">
                      <div class="h-10 mt-1 icon me-3 d-flex">
                        <i class="ni ni-laptop text-gradient text-success"></i>
                      </div>
                      <div
                        class="w-100 d-flex align-items-center justify-content-between"
                      >
                        <div>
                          <p class="p-0 dropdown-header text-dark">Wizard</p>
                        </div>
                      </div>
                    </div>
                  </router-link>
                  <router-link class="py-2 ps-3 border-radius-md" :to="{ name: 'CRM' }">
                    <div class="d-flex">
                      <div class="h-10 mt-1 icon me-3 d-flex">
                        <i class="ni ni-badge text-gradient text-success"></i>
                      </div>
                      <div
                        class="w-100 d-flex align-items-center justify-content-between"
                      >
                        <div>
                          <p class="p-0 dropdown-header text-dark">CRM</p>
                        </div>
                      </div>
                    </div>
                  </router-link>
                  <router-link class="py-2 ps-3 border-radius-md" :to="{ name: 'CRM' }">
                    <div class="d-flex">
                      <div class="h-10 mt-1 icon me-3 d-flex">
                        <i class="ni ni-notification-70 text-gradient text-success"></i>
                      </div>
                      <div
                        class="w-100 d-flex align-items-center justify-content-between"
                      >
                        <div>
                          <p class="p-0 dropdown-header text-dark">CRM</p>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav d-lg-block d-none">
          <li class="nav-item">
            <a
              href="https://www.creative-tim.com/product/vite-soft-ui-dashboard-pro"
              class="mb-0 btn btn-sm btn-round me-1"
              :class="btnBackground ? btnBackground : 'bg-white'"
              >Buy Now</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<script>
import bgImg from '@/assets/img/curved-images/curved8.jpg'
import downArrWhite from '@/assets/img/down-arrow-white.svg'
import downArrBlack from '@/assets/img/down-arrow-dark.svg'
import Icon from '@/components/Icon.vue'

export default {
  name: 'Navbar',
  components: { Icon },
  props: {
    btnBackground: { type: String, default: '' },
    isBlur: { type: String, default: '' },
    darkMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      bgImg,
      downArrWhite,
      downArrBlack
    }
  },
  computed: {
    darkModes() {
      return {
        'text-dark': this.darkMode
      }
    }
  }
}
</script>
