<script>
import * as unitApi from '../../api'
import unitPatchDialog from '../patchDialog/unitPatchDialog.vue'
import unitCreateDialog from '../createDialog/unitCreateDialog.vue'

export default {
  components: { unitCreateDialog, unitPatchDialog },
  data: () => ({

    title: 'Список единиц измерения',
    editDialog: {
      isOpen: false,
      unitId: null,
    },
    unitList: [],
    headers: [
      { title: 'Наименование', key: 'name' },
      { title: 'shortName', key: 'shortName' },
      { title: 'fullName', key: 'fullName' },
      { title: 'codeId', key: 'codeId' },
      { title: 'isHourUnit', key: 'isHourUnit' },
      { title: 'Ключ', key: 'key'},
      { title: 'В корзине', key: 'isTrash' },
    
      { key: 'actions' }
    ],
  }),
  methods: {
    async postUnitOldDb () {
      await unitApi.postUnitOldDb()
    },
    openEditDialog (unitId) {
      this.editDialog = {
        isOpen: true,
        unitId: unitId,
      }
    },
    closeEditDialog () {
      this.editDialog = {
        isOpen: false,
        unitId: null,
      }
    },
    setUnitList (unit) {
      const index = this.unitList.findIndex(u => u.id === unit.id)
      if (index >= 0) {
        this.unitList.splice(index, 1, unit)
      } else {
        this.unitList.push(unit)
      }
    }
  },
  async mounted () {
    const unitList = await unitApi.getUnitList()
    this.unitList = [
      ...unitList,
    ]
  }
}
</script>

<template>
  <v-app-bar
      density="compact"
      no-gutters
      class="px-4"
  >
    <h3 class="mx-10">{{ title }}</h3>
    <v-spacer/>
    <v-btn
        v-tooltip:bottom="'Создать из старой базы данных'"
        variant="text"
        icon
        @click="postUnitOldDb"
    >
      <v-icon>mdi-database-arrow-down</v-icon>
    </v-btn>
    <unitCreateDialog

        @unitCreated="setUnitList($event)"
    />
  </v-app-bar>
  <v-data-table
      density="compact"
      :headers="headers"
      :items="unitList"
      fixed-header
      style="height: calc(100vh - 48px)"
      items-per-page="-1"
  >
    <template #item.actions="{ item }">
      <v-btn variant="text" icon @click="openEditDialog(item.id)">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>
  </v-data-table>
  <unitPatchDialog
      :isOpen="editDialog.isOpen"
      :unitId="editDialog.unitId"
      @closeDialog="closeEditDialog"
      @unitPatched="setUnitList($event)"
  />
</template>

<style scoped>
</style>