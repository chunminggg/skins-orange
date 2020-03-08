<template>
  <section v-if="leftMenus && leftMenus.length > 0" class="nm-menus">
    <el-scrollbar>
      <el-menu :default-active="active" :unique-opened="uniqueOpened" :collapse="collapse" :collapse-transition="false">
        <template v-for="item in leftMenus">
          <menu-item v-if="item.show" :key="item.id" :menu="item" />
        </template>
      </el-menu>
    </el-scrollbar>
  </section>
</template>
<script>
import MenuItem from 'netmodular-ui/packages/skins/pretty/components/menus/item'
import { mapState } from 'vuex'
export default {
  components: { MenuItem },
  computed: {
    ...mapState('app/system', { uniqueOpened: s => s.config.component.menu.uniqueOpened }),
    ...mapState('app/skins/classics/sidebar', ['collapse']),
    ...mapState('app/skins/classics', ['leftMenus']),
    ...mapState('app/account', ['routeMenus']),
    ...mapState('app/page', ['current']),
    active: {
      get() {
        if (this.current.name && this.routeMenus) {
          let routeMenu = this.routeMenus.get(this.current.name)

          if (routeMenu) {
            return routeMenu.menu.id
          }
        }
        return '-1'
      },
      set() {}
    }
  }
}
</script>
