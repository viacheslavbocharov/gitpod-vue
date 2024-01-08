<template>
  <div>
    <HeaderBlock />
    <HelloBlock />
    <SelectBlock />
    <RemotBlock />
    <DevBlock />
    <StartedBlock />
    <FooterBlock />
  </div>
</template>

<script>
import HeaderBlock from "@/components/HeaderBlock.vue";
import HelloBlock from "@/components/HelloBlock.vue";
import SelectBlock from "@/components/SelectBlock.vue";
import RemotBlock from "@/components/RemotBlock.vue";
import DevBlock from "@/components/DevBlock.vue";
import StartedBlock from "@/components/StartedBlock.vue";
import FooterBlock from "@/components/FooterBlock.vue";

export default {
  name: "HomePage",
  components: { HeaderBlock, HelloBlock, SelectBlock, RemotBlock, DevBlock, StartedBlock, FooterBlock, },
};
</script>

<style>

</style>
